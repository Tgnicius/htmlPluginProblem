'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Action from './index'
// module serve para ver se usa ou não hot load

const stories = storiesOf('Actions', module)

stories.add('Actions component', () => (
  <Action botaorepos={action('botaorepos')} botaostar={action('botaostarred')} />
))
