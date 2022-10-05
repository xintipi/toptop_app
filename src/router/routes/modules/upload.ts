import { Upload } from '@/pages';
import { DEFAULT_NOT_SIDEBAR } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/upload',
  name: 'upload',
  element: Upload,
  layout: DEFAULT_NOT_SIDEBAR,
  meta: {
    title: 'Upload',
    auth: true,
  },
};

export default home;
