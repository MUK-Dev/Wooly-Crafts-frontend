/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min";
import classes from "./Cart.module.css";
import CartItems from "../../components/CartItems/CartItems";
import { connect } from "react-redux";

class Cart extends Component {
	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function () {
			var elems = document.querySelectorAll("#cart");
			// eslint-disable-next-line no-unused-vars
			var instances = M.Sidenav.init(elems, {
				edge: "right",
			});
		});
	}
	render() {
		return (
			<div>
				<div className="fixed-action-btn">
					<div className={classes.CartCounter}>{this.props.totalItems}</div>
					<a
						href="#"
						data-target="cart"
						className="waves-effect waves-light btn btn-floating btn-large sidenav-trigger"
						style={{ backgroundColor: "#ff8882" }}
					>
						<i className="material-icons">shopping_cart</i>
					</a>
				</div>
				<ul className="sidenav sidenav-close" id="cart">
					<CartItems />
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		totalItems: state.cart.cartItems.length,
	};
};

export default connect(mapStateToProps)(Cart);
