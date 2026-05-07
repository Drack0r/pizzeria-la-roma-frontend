import { MenuItemCard } from "@/components/ui";
import desserts from "@/data/desserts.json";
import pizzas from "@/data/pizzas.json";

function Menu() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center gap-20 pt-20">
      <h1 className="heading-2">Notre Carte</h1>

      {/* Pizza container */}
      <div className="flex flex-col items-center">
        <h2 className="heading-3 mb-10">Nos Pizzas</h2>
        <div className="flex w-[80vw] flex-wrap gap-5">
          {pizzas.map((pizza) => (
            <MenuItemCard
              key={pizza.id}
              imageSrc={pizza.imageSrc}
              imageAlt={pizza.imageAlt}
              name={pizza.name}
              description={pizza.description}
              tags={pizza.tags}
              price={pizza.price}
            />
          ))}
        </div>
      </div>

      {/* Dessert container */}
      <div className="flex flex-col items-center">
        <h2 className="heading-3 mb-10">Nos Desserts</h2>
        <div className="flex w-[80vw] flex-wrap gap-5">
          {desserts.map((dessert) => (
            <MenuItemCard
              key={dessert.id}
              imageSrc={dessert.imageSrc}
              imageAlt={dessert.imageAlt}
              name={dessert.name}
              description={dessert.description}
              tags={dessert.tags}
              price={dessert.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
