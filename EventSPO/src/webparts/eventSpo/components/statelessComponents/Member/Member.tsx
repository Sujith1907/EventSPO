import * as React from 'react';

import { Persona, PersonaSize} from 'office-ui-fabric-react';
import styles from './Member.module.scss';

const Member = (props:any) => (
    <div className="ms-PersonaExample">
        <Persona
            primaryText={props.name}
            imageUrl={props.imageUrl}
            size={PersonaSize.small}
            secondaryText={props.secondaryText}
        />
    </div> 
);

export default Member;