import { $api } from '@/common/axios/instance';
import { MenuItem } from '@/common/models/menu/menu';
import { TopPageModel } from '@/common/models/page/page';
import { ProductModel } from '@/common/models/product/product';
import { getLayout } from '@/layout/Layout';
import { AxiosResponse } from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextPageWithLayout } from '../_app';

const firstCategory = 0;

interface CourseProps {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}

const Course: NextPageWithLayout<CourseProps> = (props): JSX.Element => {
  const { products } = props;
  return <>{products?.length}</>;
};

Course.getLayout = getLayout;

export default Course;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await $api.post<'', AxiosResponse<MenuItem[]>, { firstCategory: number }>(
    'api/top-page/find',
    { firstCategory }
  );

  return {
    paths: menu.flatMap((m) => m.pages.map((p) => `/courses/${p.alias}`)),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }) => {
  if (params === undefined) {
    return {
      notFound: true
    };
  }

  const { data: menu } = await $api.post<'', AxiosResponse<MenuItem[]>, { firstCategory: number }>(
    'api/top-page/find',
    { firstCategory }
  );

  const { data: page } = await $api.get<TopPageModel>(`api/top-page/byAlias/${params.alias}`);

  const { data: products } = await $api.post<
    '',
    AxiosResponse<ProductModel[]>,
    { category: string; limit: number }
  >('api/product/find', { category: page.category, limit: 10 });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  };
};
