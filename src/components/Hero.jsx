import Button from "./Button.jsx";

export function Hero() {
  return (
    <div className="flex flex-col pl-4">
      <div>
        <h1 className="text-pink text-4xl font-bold">Jack Tubbenhauer</h1>
        <h2 className="text-3xl font-semibold text-slate-300">Web Developer</h2>
        <p className="text-slate-300">Sydney, Australia</p>
      </div>
      <div className="text-slate-300 mt-6 text-lg italic">
        <p>Frontend Development</p>
        <p>UI/UX Design</p>
        <p>Ecommerce Specialist</p>
      </div>
      <Button text={"Get In Touch"} url={"/"} />
    </div>
  );
}
