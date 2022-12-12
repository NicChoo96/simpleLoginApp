import LanguageSwitcher from "components/languageSwitcher/LanguageSwitcher"
import { useTranslation } from "react-i18next"

const Footer = ()=> {

    const {t} = useTranslation()

    return(
        <div style={{position: "absolute", bottom: 0, width: "100%", height: "fit-content", backgroundColor: "darkblue", color:"white", display:'flex', justifyContent: 'space-between'}}>
            <p style={{paddingLeft: "10px", fontSize: "0.7rem"}}>{t('appCreatedByNicholasChooJianHao')}</p>
            <div style={{alignSelf: 'center'}}><LanguageSwitcher /></div>
        </div>
    )
}

export default Footer