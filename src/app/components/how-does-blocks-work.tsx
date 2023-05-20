interface Card extends React.HTMLAttributes<any> {
  title: string;
  description: string;
}

function Card({ title, description }: Card) {
  return (
    <div className="border hover:shadow-md max-w-lg p-4 rounded-md text-left">
      <p className="font-bold text-xl my-2">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default function HowDoesBlocksWork() {
  return (
    <div className="mt-32 max-w-5xl mx-auto">
      <div>
        <p className="text-4xl font-bold my-4">How does Blocks work?</p>
        <p className="text-xl text-gray-500">
          Blocks exposes a simple REST API to store and retrieve blocks (JSON
          Objects) from the cloud. It helps you focus more on your project
          development by taking care of the Database.
        </p>
      </div>

      <div className="relative my-20 border-b">
        <div
          className="absolute z-0 h-full border border-accent2"
          style={{ left: "50%" }}
        />
        <div className="grid md:grid-cols-2 gap-2 md:gap-10 z-20 relative">
          <Card
            title="Create a new Block"
            description="Visit the dashboard and create a new block. Each block gets a unique ID."
          />

          <div className="col-start-2 row-start-2">
            <Card
              title="Store your data"
              description="Make HTTP network requests (such as POST) to store data in a block or a separate collection."
            />
          </div>
          <div className="row-start-3">
            <Card
              title="Modify your Data"
              description="Modify or delete data using PUT or DELETE requests on a block, a collection, or even an individual record."
            />
          </div>
          <div className="col-start-2 row-start-4">
            <Card
              title="Retreive your Data"
              description="Query your data with a GET request on a block or a collection. Add sort, filter, and limit operations to enhance your query."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
