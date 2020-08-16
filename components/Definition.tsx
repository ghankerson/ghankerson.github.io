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
        <a role='link' tabIndex={-1} onKeyPress={() => toggler()} onClick={() => toggler()}>{label}</a>
      </dt>
      <dd className={styles[ToggleClass]}>
        <div>{text} <br /> <br /> </div>
        <div><em>{source}</em></div>
        <div>
          <a role='link' tabIndex={0} onKeyPress={() => toggler()} onClick={() => toggler()}>Close</a>
          <br /> 
        </div>
      </dd>
    </dl>
  )
}

export default Definition
