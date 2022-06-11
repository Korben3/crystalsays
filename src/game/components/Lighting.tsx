const Lighting = () => {
  return (
    <group>
      <pointLight position={[-2, 2, 0]} color={"#8888EE"} intensity={0.8} castShadow />
    </group>
  );
};
export default Lighting;
