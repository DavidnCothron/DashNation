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
                    wrapperStyle={{ marginBottom: '0', }}
                    style={{
                        background: 'rgb(255, 201, 92)',
                        width: '100%',
                        mozTransition: 'all 2s ease-in-out',
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