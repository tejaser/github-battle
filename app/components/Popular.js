import React from 'react';

class Popular extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updatedLanguage = this.updatedLanguage.bind(this);
    }
    updatedLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        });
    }
    render(){
        var languages = ['All', 'JavaScript', 'Ruby', 'Python', 'Java', 'CSS']
        return (
            <div>
                <ul className='languages'>
                    {languages.map((lang) => {
                        return (
                            <li 
                                style={lang === this.state.selectedLanguage ? {color: '#d0021b'}: null}
                                onClick={this.updatedLanguage.bind(null, lang)}
                                key={lang}>
                                {lang}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Popular;