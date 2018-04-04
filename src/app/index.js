import time from './time';

const feast = (beast, dish) => {
  const fb = beast.substr(0, 1);
  const lb = beast.substr(-1, 1);
  const fd = dish.substr(0, 1);
  const ld = dish.substr(-1, 1);
  return fb + lb === fd + ld;
};

feast('great blue heron', 'garlic naan');
export default feast;
