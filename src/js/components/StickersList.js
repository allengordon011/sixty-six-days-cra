import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions';

class StickersList extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchStickers())
    }
    render() {
        let stickersArray = this.props.stickers.stickers;
        let earnedStickers = stickersArray.length <= 1 ? "Loading..." : stickersArray.map((sticker, i) => {
            if(sticker.earned === true){
                return (
                    <div key={i}>
                        <img className='earned-sticker' src={sticker.sticker} alt="sticker"/>
                    </div>
               )}
        })

          return (
              <div>
                  <h3 className="stickers-earned">Stickers Earned</h3>
                  <p className="stickers-earned-subtitle">Complete your goals to earn rewards!</p>
                  {earnedStickers}
              </div>
          );
      }
}

const mapStateToProps = (state, props) => ({stickers: state.stickers})

export default connect(mapStateToProps)(StickersList);
