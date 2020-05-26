import * as React from 'react';
import Member from '../statelessComponents/Member/Member';
import styles from './Members.module.scss';

class Members extends React.Component<any, any> {
    private users = {
        person: [
            {
                name: 'Adele Rivera',
                imageUrl: '',
             
                secondaryText: 'SharePoint Architect'
            },
            {
                name: 'Cadele Vance',
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
        let membersList = (
            this.users.person.map( p => {
                return (
                    <Member
                        name = {p.name}
                        imageUrl ={p.imageUrl}
                        secondaryText = {p.secondaryText} />
                );
            })
        );
        return (
            <div className = {styles.Members}>
                {membersList}
            </div>
                
        );
    }
}

export default Members;