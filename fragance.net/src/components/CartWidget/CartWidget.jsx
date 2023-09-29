import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContextPerfume } from "../../context/CartContextPerfume";
import { useContext } from "react";

const CartWidget = () => {
  const { getItemQuantity } = useContext(CartContextPerfume);
  const itemCount = getItemQuantity();
  return (
    <Link className="nav-link" to="/cart">
      <div className="position-relative">
        <FontAwesomeIcon icon={faCartPlus} size="lg" />
        {itemCount > 0 && (
          <span className="badge rounded-pill bg-danger cart-badge">
            {itemCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
