import './CenterBoxWrapper.css'

const CenterBoxWrapper = ({ children }) => {
  return (
    <div className="center-box-wrapper">
      <div className="center-box">{children}</div>
    </div>
  )
}

export default CenterBoxWrapper
