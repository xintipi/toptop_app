import React from 'react';

import { Default, HeaderOnly } from '@/layouts';
import { Following, Home, PageNotFound, Profile, Search, Upload } from '@/pages';

export interface Record {
  path: string;
  layout?: ({ children }: any) => React.ReactElement;
  component?: () => React.ReactElement;
}

const publicRoutes: Record[] = [
  { path: '', component: Home, layout: Default },
  { path: 'following', component: Following, layout: Default },
  { path: 'profile', component: Profile, layout: Default },
  { path: 'upload', component: Upload, layout: HeaderOnly },
  { path: 'search', component: Search },
  { path: '404', component: PageNotFound, layout: HeaderOnly },
  { path: '*' },
];

// const privateRoutes = []

export { publicRoutes };
