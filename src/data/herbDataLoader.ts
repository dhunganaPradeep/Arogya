import { Herb } from "./herbs";

export async function loadHerbs(): Promise<Herb[]> {
  try {
    const indexResponse = await fetch('/herbDetails/index.json');
    if (!indexResponse.ok) {
      throw new Error(`Failed to fetch index.json: ${indexResponse.status}`);
    }
    const herbIds: string[] = await indexResponse.json();
  //  console.log("Herb IDs from index.json:", herbIds);

    const herbs: Herb[] = [];
    const fetchPromises = herbIds.map(async (id) => {
      try {
        const response = await fetch(`/herbDetails/${id}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${id}.json: ${response.status}`);
        }
        const herb: Herb = await response.json();
    //    console.log(`Loaded herb: ${id}`, herb);
        herbs.push(herb);
      } catch (error) {
    //    console.error(`Failed to load herb ${id}:`, error);
      }
    });

    await Promise.all(fetchPromises);
   // console.log("Final herbs array:", herbs);
    return herbs;
  } catch (error) {
   // console.error("Failed to load herbs:", error);
    return [];
  }
}

export async function loadHerbById(id: string): Promise<Herb | undefined> {
  try {
    const response = await fetch(`/herbDetails/${id}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${id}.json: ${response.status}`);
    }
    const herb: Herb = await response.json();
    // console.log(`Loaded herb by ID: ${id}`, herb);
    return herb;
  } catch (error) {
 //   console.error(`Failed to load herb with id ${id}:`, error);
    return undefined;
  }
}