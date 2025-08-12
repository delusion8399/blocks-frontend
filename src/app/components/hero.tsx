import Button from "./button";
import Features from "./features";
import HowDoesBlocksWork from "./how-does-blocks-work";

export default function Hero() {
  return (
    <div className="flex justify-center my-6 md:my-10 container px-4">
      <div className="flex flex-col text-center justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mt-2">
          The JSON
        </h1>
        <h1 className="font-extrabold text-transparent text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 my-2">
          “Database”
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
          for your projects
        </h1>

        <div className="desc mt-6 md:mt-10 px-4">
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Blocks is a HTTP-Based JSON object storage service to help you get
            started with your project easily and for free!
          </p>
        </div>
        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row justify-center gap-2 px-4">
          <Button size="large" variant="dark" name="Get Started" />
          <Button size="large" variant="light" name="Read the docs" />
        </div>
        <HowDoesBlocksWork />

        <Features />
      </div>
    </div>
  );
}
