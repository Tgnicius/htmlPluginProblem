'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import UserInfo from './index'

const stories = storiesOf('User Info', module)

stories.add('User Info component', () => (
  <UserInfo userinfo={{ username: 'Lucius', photo: 'https://avatars1.githubusercontent.com/u/58370059?v=4', login: 'Tgnicius', repos: 2, followers: 0, following: 1 }} />
))
