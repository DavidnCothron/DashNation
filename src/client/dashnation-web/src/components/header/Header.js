import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Headroom from 'react-headroom';

export default class Header extends Component {
    state = {

    }

    render() {
        const headerInfo = this.state;

        return (
            <div>
                <Headroom
                    wrapperStyle={{
                        marginBottom: '10px',
                    }}
                    style={{
                        mozTransition: 'all 2s ease-in-out',
                        background: 'rgb(255, 201, 92)',
                        width: '100%',
                    }}
                >
                    <div style={{ textAlign: 'justify' }}>
                        <h1>DashNation</h1>
                    </div>
                </Headroom>
            </div>
        )
    }
}