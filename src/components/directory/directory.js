import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'League of Legends',
                    imageUrl: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/LolGameInfo-Harbinger/en_US/38ab789b95736954fc41a681dd4ea6066e58fd66/assets/assets/images/gi-landing-top.jpg',
                    id: 1,
                    linkUrl: 'LeagueofLegends'
            
                  },
                  {
                    title: 'Overwatch',
                    imageUrl: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/p4/P4ZCRKVMD22Z1572636780900.jpg',
                    id: 2,
                    linkUrl: 'Overwatch'
                  },
                  {
                    title: 'CSGO',
                    imageUrl: 'https://esportsjunkie.com/wp-content/uploads/2019/05/CSGO-Banner-24-3-2019.jpg',
                    id: 3,
                    linkUrl: 'CSGO'
                  },
                  {
                    title: 'PUBG',
                    imageUrl: 'https://lite.pubg.com/wp-content/uploads/2019/10/image-5-1499x625.jpg',
                    size: 'small',
                    id: 4,
                    linkUrl: 'PUBG'
                  },

            ]
        }
    }
    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => 
                <MenuItem key={id} {...otherSectionProps}/>
                )}
            </div>
        )
    }
}
export default Directory;
