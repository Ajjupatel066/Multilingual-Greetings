import {Component} from 'react'
import LanguageItem from './LanguageItem'
import './App.css'

import {
  AppContainer,
  Heading,
  LanguageList,
  LanguageImage,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguage: languageGreetingsList[0].id,
  }

  selectButton = id => {
    this.setState({
      activeLanguage: id,
    })
  }

  getLanguageDetails = () => {
    const {activeLanguage} = this.state
    const updated = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeLanguage,
    )
    return updated
  }

  render() {
    const {activeLanguage} = this.state
    const languageDetails = this.getLanguageDetails()
    // console.log(languageDetails)

    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
        <LanguageList>
          {languageGreetingsList.map(eachLanguage => (
            <LanguageItem
              key={eachLanguage.id}
              languageDetails={eachLanguage}
              activeTab={activeLanguage === eachLanguage.id}
              selectButton={this.selectButton}
            />
          ))}
        </LanguageList>
        <LanguageImage
          src={languageDetails[0].imageUrl}
          alt={languageDetails[0].imageAltText}
        />
      </AppContainer>
    )
  }
}

export default App
