'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title prop', () => (
    <div style={{ paddingLeft: '10px' }}>
      <Repos titulo='Favoritos' />
    </div>
  ))

  .add('with repos', () => (
    <Repos titulo='Favoritos' repos={[{ html_url: 'https://www.facebook.com/', name: 'Facebook' }]} />
  ))
