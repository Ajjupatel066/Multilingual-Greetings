import {LanguageButton} from './styledComponents'

const LanguageItem = props => {
  const {languageDetails, selectButton, activeTab} = props
  const {id, buttonText} = languageDetails

  const onClickButton = () => {
    selectButton(id)
  }
  const bgColor = activeTab ? '#db1c48' : '#ffffff'
  const textColor = activeTab ? '#ffffff' : '#000'

  return (
    <li>
      <LanguageButton
        type="button"
        onClick={onClickButton}
        textColor={textColor}
        color={bgColor}
      >
        {buttonText}
      </LanguageButton>
    </li>
  )
}

export default LanguageItem
