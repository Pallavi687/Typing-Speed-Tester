import { useState } from 'react';
import Select from 'react-select';
import { themeOptions } from '../Utils/themeOptions';
import { useTheme } from '../Context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const { setTheme, theme } = useTheme();

  const iconStyle = {
    cursor: 'pointer',
    fontSize: '2rem'
  }

  const handleChange = (e) =>{
    setTheme(e.value);

    localStorage.setItem('theme', JSON.stringify(e.value));
  }

  const handleGithub = (e) =>{
    window.open("https://github.com/Pallavi687/Typingspeed", '_blank');
  }

  const handleLinkedin = () =>{
    window.open("https://www.inkedin.com/in/pallavi-khadse-6b036411b/", '_blank');
  }

  const handleFacebook = () =>{
    window.open("https://www.facebook.com/pallavi.khadse.39", '_blank');
  }
  
  const handleDocs = () =>{
    window.open("https://docs.google.com/spreadsheets/d/1rncRo0gXAHn4xwrA6dZSCqpN0xz5dLyBqPsST0BJbSA/edit?usp=sharing", '_blank');
  }

  const handleInstagram = () =>{
    window.open("https://www.instagram.com/pallavikhadse91/", '_blank');
  }

  return (
    <div className="footer">
      <div className="links">
        <GitHubIcon style={iconStyle} onClick={handleGithub}/>
        <LinkedInIcon style={iconStyle} onClick={handleLinkedin} />
        <FacebookIcon style={iconStyle} onClick={handleFacebook} />
        <InstagramIcon style={iconStyle} onClick={handleInstagram} />
        <DocumentScannerIcon style={iconStyle} onClick={handleDocs} />
      </div>
      <div className="copyright">
        Copyright &#169; by Pallavi Khadse
      </div>

      <div className="themeButton">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement='top'
          defaultValue={{label: theme.label, value: theme}}
          styles ={{
            control: styles => ({
              ...styles,
              backgroundColor: theme.background, 
              color:theme.textColor
            }),
            menu: styles => ({...styles, backgroundColor: theme.background}),
            option: (styles, {isFocused}) => {
              return {
                ...styles,
                backgroundColor: (!isFocused ? theme.background : theme.textColor),
                color: (!isFocused ? theme.textColor : theme.background),
                cursor: 'pointer'
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default Footer
