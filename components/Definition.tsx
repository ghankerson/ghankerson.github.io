import React, { useState } from 'react'
import styles from './styles/Definition.module.css'

interface DefinitionProps {
  label: string,
  text: string,
  source: string
}

const Definition = ( { label, text, source } ) => {
  const [ToggleClass, SetToggleClass] = useState('description')
  
  const toggler = () => {
    ToggleClass === 'description' ? SetToggleClass('view') : SetToggleClass('description')
  }

  return (
    <dl className={styles.definiton}>
      <dt className={styles.term} >
        <a
          onClick={() => toggler()}>{label}
        </a>
      </dt>
      <dd className={styles[ToggleClass]}>{text} <em>{source}</em> <br /> <a onClick={() => toggler()}>Close</a></dd>
    </dl>
  )
}

export default Definition
