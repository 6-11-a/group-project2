import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial';
import {envelopeO} from 'react-icons-kit/fa/envelopeO'
import { instagram } from 'react-icons-kit/fa/instagram';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="#"><Icon size={32} icon={facebookOfficial} /></a>
                <a href="#"><Icon size={32} icon={instagram} /></a>
                <a href="#"><Icon size={32} icon={twitterSquare} /></a>
                <a href="#"><Icon size={32} icon={envelopeO} /></a>
            </div>
        )
    }
}
