import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
type Props = {}

const Header = (props: Props) => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1>WDYW <span> <LocalDiningIcon/></span></h1>
        <h2>Don't know what you want? </h2>
        <h3> Come figure it out!</h3>
      </div> 
    </div>
  )
}
export default Header