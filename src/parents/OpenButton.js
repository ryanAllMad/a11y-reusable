import React from 'react'

const OpenButton = ({
  children,
  id,
  tabIndex,
  onClick,
  ariaHasPopup,
  ariaExpanded,
  ariaControls,
}) => {
  return (
    <button
      id={id}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      aria-controls={ariaControls}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default OpenButton
