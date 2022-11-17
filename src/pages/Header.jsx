import '../styles/index.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LockIcon from '@mui/icons-material/Lock';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LoginIcon from '@mui/icons-material/Login';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu';
import { MDBSwitch } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Feedback from './Feedback';

function Header({ onToggleNews, onToggleImg }) {
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div>
      <Navbar collapseOnSelect expand={false} variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEXz8/PzUyWBvAYFpvD/ugjz9PX19PXz+fr39fr69vPy9fp5uAAAofD/tgDz3Nji6tfzRADzTBfzmYew0oB/xfH70IDX5/P16tfz5eLo7eHzPADzlICs0Hfh6/N3wvH7znj07eEAnvDzvbPL3q6u1/L43q6vy/leAAABd0lEQVR4nO3cR1IDQRREwcb0SEgj770B7n9FNmhEBL1g8zUs8l2gIi9QKUmSpHs5vPtWFV4uANMwunUD3IyiS7+Jebgdx7bddb63uvt+dKOqIBw/xTaZNsLZc3CEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEjxVuJ7GNfwj7LQjTejcN7noTVu+z4PabgjB1wmumqm50JaAkSX/oLbxmKveiK/zqp8NxHtvx40bMn6dFbKdzgbi81MEdb8LeaRDdqiSsX2Kr541wMXiNjZCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPCxwuj/0kvb/6V5Gd2hmTqvokulm90HluNrFyhJ0j/rC6N0RI28dGy3AAAAAElFTkSuQmCC"
            width="20%"
            height="35px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{ marginLeft: '50%' }}
          />
          <span style={{ color: 'white', fontSize: '20px' }}> &nbsp;&nbsp; Microsoft Bing</span>
        </Navbar.Brand>
        {toggle && (
          <Navbar>
            <Navbar.Brand href="https://www.bing.com/images/feed?form=Z9LH">Images</Navbar.Brand>

            <Navbar.Brand href="https://www.bing.com/videos/onecolumn/landing?form=Z9LH1">
              Videos
            </Navbar.Brand>
            <Navbar.Brand href="https://www.bing.com/maps?FORM=Z9LH2">Maps</Navbar.Brand>
            <div className="dropdown">
              <NavDropdownMenu title="...">
                <NavDropdown.Item href="https://www.bing.com/search?q=Bing+translate&FORM=TTAHP1">
                  Translate
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.bing.com/news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3">
                  News
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.bing.com/travel?FORM=TGHPNT&entrypoint=TGHPNT">
                  Travel
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.msn.com/en-in?ocid=BHEA000&cvid=9e56b656b2ca47e1fb3d430a98787b23">
                  MSN
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.start.gg/discover?ocid=ESPHUB_BNG_10">
                  Esports
                </NavDropdown.Item>
                <NavDropdown.Item href="https://takelessons.com/?utm_source=bing&utm_medium=hp&utm_campaign=binghp-live&utm_content=binghplink">
                  Take Lesson
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.msn.com/en-in/health?ocid=binghphea&cvid=9e56b656b2ca47e1fb3d430a98787b23">
                  Health
                </NavDropdown.Item>
                <DropdownSubmenu href="#action/3.7" title="Office">
                  <NavDropdown.Item href="https://outlook.live.com/owa/?WT.mc_id=O16_BingHP">
                    Outlook
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638042589511806078.ZDY5NmNhYzItNGI4Ny00MjlkLTlkMGUtNjJmMTYxMzVjOGY3ODU5YmVmZTktNjQwNy00MmJmLWJhMDEtMjQ5YmVjNmFiNjQ3&ui_locales=en-GB&mkt=en-GB&state=FTLBbSC61ugUNKAzyqL_P8NIk8FENtIJUISJe7pvL6CuUObEwVYnXjd_OrlHXv1Y4oSFVJr12_dVhzqJe04gYSa5FOy3QsSfGeqYnMSXdHWqqgbmlDYIoeFAzwI7PcUWbGVM7Pc0q7YEaiei9kJjt4rAtlHZjsMQlH8NG7WiRdiC5IhOtfWHD_jfCBA1qkIU1h3yEZu1DWyCabU7IYpDrxqUkpthmKYdQlXBXF3zIRbzDg0e5drACjkWflpYQi2-sAdzsEFsqVL6xZ7kNeuV9ZjqOsvo4nXiDLdKq4xqZn5CkqROqwCDbkWUZthItaCZlLJ36jyiEYU7XC32X3EBGmDdaDWZPlsTcOzI2n9BnzI&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.16.0.0">
                    Word
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638042589512922010.MTIzMThlODgtMzU4Yi00YmE2LTg1MTUtMGVhODY3MDFmNWVhY2MwNDQ1ZTYtNWM2Ny00NjIyLWExM2UtN2Q3ODhiZTMwMTM0&ui_locales=en-GB&mkt=en-GB&state=Jq3WCd5KW2Y22fmJBDBAIgA8z2i_asgnia9J8tL1z7TOBDfwfaPZrwRQtrva3wZkY056_lRtFCKXOWMdY2hhI-nrRUIUUShtklIybwpx5ueSb9G71ciCI6xebqmS7-1ES_3HM-pdzqTi3RMYaupZHWZZ-U8wA_iPmK7IcJ-Khw3rkEBIhzjiSJs7INZOkZBVkXaymvoSPT7q_bc_p4znN_n5nNQDRVEnbXw4cR9Vpygaq0rlOSvHTfM4JTuruJaBwivl4J4XNZBaMvXhluDQLzEyYkkjo7DIA8THVjiFIcewEDvJQ4X23-QgaDzhuE1poGEET0uXyF_aNh-uRV_oeeFqUnHDKJWDSc1XYBnTIa8&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.16.0.0">
                    Excel
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638042589525415106.NTU0MmJiOGMtMzRlNy00MzY0LWFkMmMtMmJkOTBlYWUwYWQ1YmI4NWRiMDgtMGE0YS00NjA1LThhODMtZTdmMTRmNGQ3Yzkz&ui_locales=en-GB&mkt=en-GB&state=b7dEVzDvj5LGhXRmXvG6jVO13skUhJz_Tlofoy6rrzANIjAskM77_stbA9nfDpllgYkcgP7ac_zCRJ-5vyruO1ML7a3EE91_oFhjuN81TQqAwUdVV5XBsv_PyvD502_arGQ95j3Oi1gQaXxWTROXprvPu_x_-nRUqJxwMcMcUKavT33_gNPMBHqmCgIZADjf8NvaYnj1tXrG26D5EFfK_GvADx_nWjb8fy7X6p8oFBNmz9lG-Ij1u5zPYwZvfFYtM7_j9GyzbuPlC_8lXjm2cvon4vBnPpx65Fm5hoZ_ryAdvIhd38w-mJfCUgBTUczbCHo7EWGUwAUNUf-8Hfh7CxfpVLRMUxlNaXnWc3HHCyg&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.16.0.0">
                    PowerPoint
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.onenote.com/hrd?wdorigin=ondcauth2&wdorigin=ondcnotebooks">
                    OneNote
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://sway.office.com/?WT.mc_id=O16_BingHP&utm_source=O16Bing&utm_medium=Nav&utm_campaign=HP">
                    Sway
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1668662158&rver=7.3.6962.0&wp=MBI_SSL_SHARED&wreply=https:%2F%2Fonedrive.live.com%2F%3Fgologin%3D1%26WT.mc_id%3DO16_BingHP%26mkt%3Den-GB&lc=2057&id=250206&cbcxt=sky&mkt=en-GB&lw=1&fl=easi2">
                    OneDrive
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://outlook.live.com/owa/?path=/calendar">
                    Calendar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://outlook.live.com/owa/?path=/people&WT.mc_id=O16_BingHP">
                    People
                  </NavDropdown.Item>
                </DropdownSubmenu>
              </NavDropdownMenu>
            </div>
          </Navbar>
        )}
        <div>
          <Navbar.Brand href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&id=264960&wreply=https%3a%2f%2fwww.bing.com%2fsecure%2fPassport.aspx%3frequrl%3dhttps%253a%252f%252fwww.bing.com%252f%253fwlexpsignin%253d1%26sig%3d3E79E48CDE9A6E6E2967F6D3DF016FD0&wp=MBI_SSL&lc=2057&CSRFToken=47f5676d-c92f-4590-9bd6-223fad94a2aa&aadredir=1">
            Sign in <LoginIcon />
          </Navbar.Brand>
          <Navbar.Brand href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&id=264960&wreply=https%3a%2f%2fwww.bing.com%2fsecure%2fPassport.aspx%3frequrl%3dhttps%253a%252f%252fwww.bing.com%252f%253fwlexpsignin%253d1%26sig%3d3E79E48CDE9A6E6E2967F6D3DF016FD0&wp=MBI_SSL&lc=2057&CSRFToken=47f5676d-c92f-4590-9bd6-223fad94a2aa&aadredir=1">
            9 <MilitaryTechIcon />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginRight: '200px' }} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Settings" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://www.bing.com/account/general?ru=https%3a%2f%2fwww.bing.com%2f&FORM=O2HV65&id=language_section#language-section">
                  Language
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.bing.com/account/general?ru=https%3a%2f%2fwww.bing.com%2f&FORM=O2HV65&id=region_section#region-section">
                  Country/Region
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.bing.com/account/general?ru=https%3a%2f%2fwww.bing.com%2f&FORM=O2HV65#location">
                  Location
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.bing.com/account/general?ru=https%3a%2f%2fwww.bing.com%2f&FORM=O2HV65#settings_voice">
                  Voice Search
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.bing.com/account/general?ru=https%3a%2f%2fwww.bing.com%2f&FORM=O2HV65">
                  More
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://www.bing.com/account/general?ru=https%3a%2f%2fwww.bing.com%2f&FORM=O2HV46&sh=0">
                <LockIcon />
                Safe Search
              </Nav.Link>
              <Nav.Link href="https://www.bing.com/profile/history?FORM=O2HV46">
                <YoutubeSearchedForIcon />
                Search History
              </Nav.Link>
              <Nav.Link href="https://www.bing.com/profile/interests?FORM=O2HV46">
                {' '}
                <ManageAccountsIcon /> My Bing
              </Nav.Link>
              <Nav.Link href="https://account.microsoft.com/account/privacy?refd=www.bing.com&ru=https%3A%2F%2Faccount.microsoft.com%2Fprivacy%3Frefd%3Dwww.bing.com&destrt=privacy-dashboard">
                <PrivacyTipIcon />
                Privacy
              </Nav.Link>
              <Nav.Link onClick={handleShow}>
                <ChatBubbleIcon /> Feedback
              </Nav.Link>
              <NavDropdown title="Customise your homepage" id="collasible-nav-dropdown">
                {' '}
                <NavDropdown.Item>
                  <MDBSwitch
                    id="flexSwitchCheckDisabled"
                    label=" Show menu bar"
                    onClick={onToggle}
                  />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <MDBSwitch
                    id="flexSwitchCheckDisabled"
                    label="Show news and interests"
                    onClick={onToggleNews}
                  />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <MDBSwitch
                    id="flexSwitchCheckDisabled"
                    label=" Show homepage image"
                    onClick={onToggleImg}
                  />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <ul>
                <li>
                  <Nav.Link href="https://privacy.microsoft.com/en-gb/privacystatement">
                    Privacy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Nav.Link>
                </li>
                <li>
                  {' '}
                  <Nav.Link href="https://www.microsoft.com/en-gb/servicesagreement/">
                    Legal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="https://about.ads.microsoft.com/en-gb/h/a/microsoft-advertising?s_cid=GB-Acq-DIG-src_Foot-sub_hp">
                    Advertise
                  </Nav.Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Nav.Link href="https://account.microsoft.com/privacy/ad-settings/signedout?refd=www.bing.com&ru=https%3A%2F%2Faccount.microsoft.com%2Fprivacy%2Fad-settings%3Frefd%3Dwww.bing.com">
                    About our ads &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="https://support.microsoft.com/en-gb/topic/microsoft-bing-help-82d20721-2d6f-4012-a13d-d1910ccf203f">
                    Help
                  </Nav.Link>
                </li>
              </ul>

              <span>&#169;2022 Microsoft</span>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {show && <Feedback show={show} handleClose={handleClose} />}
    </div>
  );
}

export default Header;
