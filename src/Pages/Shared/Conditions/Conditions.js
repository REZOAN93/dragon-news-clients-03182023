import React from "react";
import { Link } from "react-router-dom";

const Conditions = () => {
  return (
    <div>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam, ut
        unde eveniet dolorem voluptatum? Pariatur ipsa iste sit illo architecto
        commodi qui porro provident, doloremque explicabo asperiores error
        adipisci!
      </li>
      <li>
        Tenetur expedita ullam odio asperiores, libero eos ea a nam assumenda
        aperiam recusandae fuga, velit rem. Magni pariatur libero atque fugiat
        ea ratione non eius. Maiores temporibus et vel cumque.
      </li>
      <li>
        Ducimus minima facilis beatae necessitatibus culpa dolores odio quos ut
        architecto ea sequi reiciendis minus non, rem atque itaque, labore
        explicabo natus! Nemo quas architecto error cumque tempora! Sequi, sed?
      </li>
      <li>
        Itaque totam fuga nam perferendis quod ex voluptatibus modi corrupti
        officiis, labore doloremque dicta, obcaecati adipisci beatae sit
        molestiae quidem impedit porro? Ex unde nobis consequatur? Ipsum
        consectetur odit sit!
      </li>
      <li>
        Reiciendis dolores assumenda inventore ut accusantium cum, odio autem
        obcaecati perferendis animi reprehenderit, voluptate nulla, eum est
        aperiam debitis odit unde velit quibusdam. Eligendi velit ut, sit
        possimus veniam fuga?
      </li>
      <li>
        Veritatis, id. Amet, praesentium! Dolore explicabo odit aliquid est esse
        provident cupiditate exercitationem quas, eius nisi ullam sequi amet
        fugit perferendis eos expedita unde facilis recusandae quaerat. Aperiam,
        sit autem.
      </li>
      <div className="d-flex justify-content-center mt-3">
        <Link id="backlink" to={"/register"}>
          Go Back to Register
        </Link>
      </div>
    </div>
  );
};

export default Conditions;
