import { MongoClient, ObjectId } from "mongodb";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const assetCategory = searchParams.get("assetCategory");
  const assetType = searchParams.get("assetType");
  const id = searchParams.get("id");

  const client = new MongoClient(process.env.MONGODB_URI!);

  try {
    await client.connect();

    const database = client.db("mataram");

    const collection = database.collection("assets");

    let listData;

    // search
    if (assetCategory && assetType) {
      let query;

      if (assetType == "Kendaraan Bermotor") {
        query = { assetCategory, assetType, policeNumber: id };
      } else {
        query = { assetCategory, assetType, pemdaId: id };
      }
      listData = await collection.find(query).toArray();
    } else {
      if (id) {
        listData = await collection.findOne({ _id: new ObjectId(id) });
      } else {
        listData = await collection.find({}).toArray();
      }
    }

    return Response.json({ status: 200, data: listData });
  } catch (error) {
    return Response.json({ status: 500, message: "Something went wrong!" });
  } finally {
    await client.close();
  }
}

export async function POST(request: Request) {
  const { data } = await request.json();

  const client = new MongoClient(process.env.MONGODB_URI!);

  try {
    await client.connect();

    // Choose a name for your database
    const database = client.db("mataram");

    // Choose a name for your collection
    const collection = database.collection("assets");

    await collection.insertOne(data);

    return Response.json({ status: 201, message: "Data saved successfully!" });
  } catch (error) {
    return Response.json({ status: 500, message: "Something went wrong!" });
  } finally {
    await client.close();
  }
}
