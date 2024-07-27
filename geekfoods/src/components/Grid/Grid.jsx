import "./Grid.css";
import GridCard from "../GridCard/GridCard.jsx";

function Grid() {
  return (
    <div className="Grid">
      <div className="gridContainer">
        <GridCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis." />
        <GridCard text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
      </div>
      <div className="gridContainer">
        <GridCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores." />
        <GridCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />
      </div>
      <div className="gridContainer">
        <GridCard text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt." />
        <GridCard text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima." />
      </div>
    </div>
  );
}
export default Grid;
