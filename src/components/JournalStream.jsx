import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import Base from './Base';

class JournalStream extends Base {
    handleRecordClick = () => {
        console.log('handleRecordClick');

    }
    render() {
        return (
            <div className='JournalStream'>
                <div 
                    className='record-button'
                    onClick={() => this.handleRecordClick()}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JournalStream);
