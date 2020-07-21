import React, { useState } from 'react';

function MusicPlayer() {
  const handlePlay = (): void => {
    console.log(`handle play`);
    // TODO: handle play
  };

  const changeVolume = (e: any): void => {
    console.log(`updating volume to ${e.target.value}`);
    //  TODO: adjust volume
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-3 col-md-4' />
        <div className='col-xs-6 col-md-4'>
          <div>
            <h2 className='display-3'>CFSound</h2>
            <h4 className='display-5 text-muted'>
              <em>Welcome to CFSound</em>
            </h4>
            <div className='alert alert-warning' role='alert'>
              Adjust Speaker volume before Pressing Play
            </div>
            <br />
          </div>
          <div className='col-xs-12 text-center'>
            <div className='btn-group btn-group-lg'>
              <button
                type='button'
                className='btn btn-primary mr-1'
                onClick={handlePlay}
              >
                Play/Pause
              </button>
              <input
                type='range'
                id='volume'
                name='volume'
                className='control-volume'
                min='0'
                max='2'
                defaultValue='1'
                list='gain-vals'
                step='0.01'
                onChange={changeVolume}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
