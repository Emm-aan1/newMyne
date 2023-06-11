import CategoryItem from './../categoriy-item/CategoryItem';
import './directory.scss';
import Data from './Data'


const Directory = () => {
  return (
    <div className="directory-container">
      {Data.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
};

export default Directory;