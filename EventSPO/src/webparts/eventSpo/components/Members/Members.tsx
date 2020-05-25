import * as React from 'react';
import Member from '../statelessComponents/Member/Member';

class Members extends React.Component<any, any> {
    private users = {
        person: [
            {
                name: 'Adele Rivera',
                imageUrl: '',
             
                secondaryText: 'SharePoint Architect'
            },
            {
                name: 'Adele Vance',
                imageUrl: '',
               
                secondaryText: 'Business Analyst'
            },
            {
                name: 'John Doe',
                imageUrl: '',
               
                secondaryText: 'Manager'
            }
        ]
    }
    public render(): React.ReactElement<any> {
        return (
            <div>
                <Member 
                    name={this.users.person[0].name}
                    imageUrl={this.users.person[0].imageUrl}                   
                    secondaryText={this.users.person[0].secondaryText} />
                <Member 
                    name={this.users.person[1].name}
                    imageUrl={this.users.person[1].imageUrl}                   
                    secondaryText={this.users.person[1].secondaryText} />
                <Member 
                name={this.users.person[2].name}
                imageUrl={this.users.person[2].imageUrl}                   
                secondaryText={this.users.person[2].secondaryText} />
        </div>
        );
    }
}

export default Members;