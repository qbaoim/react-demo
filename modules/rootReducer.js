import { combineReducers }    from 'redux';
import banners                from './banners';
import news                   from './news';
import baogou                 from './baogou';
import categories             from './categories';
import products               from './products';
import rest                   from '../components/restengine/RestEngine';

export default combineReducers({
  banners,
  news,
  baogou,
  categories,
  products,
  rest
});
