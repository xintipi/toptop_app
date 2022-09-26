import React from 'react';

import { Default, HeaderOnly } from '@/layouts';
import {
  Following,
  Home,
  Message,
  PageNotFound,
  Profile,
  Search,
  Setting,
  Upload,
} from '@/pages';

export interface Record {
  path: string;
  layout?: ({ children }: any) => React.ReactElement;
  component?: () => React.ReactElement;
}

const publicRoutes: Record[] = [
  { path: '', component: Home, layout: Default },
  { path: 'following', component: Following, layout: Default },
  { path: ':profileId', component: Profile, layout: HeaderOnly },
  { path: 'upload', component: Upload, layout: HeaderOnly },
  { path: 'setting', component: Setting, layout: HeaderOnly },
  { path: 'message', component: Message, layout: HeaderOnly },
  { path: 'search', component: Search },
  { path: '404', component: PageNotFound, layout: HeaderOnly },
  { path: '*' },
];

// const privateRoutes = []

export { publicRoutes };
