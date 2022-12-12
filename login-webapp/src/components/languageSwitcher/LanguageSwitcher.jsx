import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

const LanguageSwitcher = ()=> {

    const { i18n } = useTranslation()

    const lngs = {
        en: { nativeName: 'EN' },
        cn: { nativeName: 'CN' }
    }

    const onLanguageChange = (lng) => {
        i18n.changeLanguage(lng)
    }

    return(
        <div className='language-switcher'>
            {
                Object.keys(lngs).map((lng)=> {
                    return <button onClick={()=> onLanguageChange(lng)} style={{fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}}>
                        {lngs[lng].nativeName}
                    </button>
                })
            }
        </div>
    )
}

export default LanguageSwitcher