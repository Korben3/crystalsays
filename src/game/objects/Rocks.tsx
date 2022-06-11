import Rock1 from "./Rock-1";

const Rocks = () => (
  <>
    <Rock1 position={[0, -2, -11]} scale={4} />
    <Rock1 position={[-11, -2, -9]} scale={2} rotation={[0, 1, 0]} />
    <Rock1 position={[9, -2, -9]} scale={3} rotation={[0, 1.5, 0]} />
  </>
);
export default Rocks;
