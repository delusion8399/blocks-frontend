import BlockEndpoints from "../endpoints/block-endpoints";
import apiCaller from "../api-caller";

const BlockRepository = {
  create: async function (body) {
    const request = BlockEndpoints["create"];
    return apiCaller({
      endpoint: request.path,
      options: {
        method: request.method,
        body,
        headers: {
          "x-api-key": "s",
        },
      },
    });
  },
  fetchAll: async function () {
    const request = BlockEndpoints["fetchAll"];
    return apiCaller({
      endpoint: request.path,
      options: {
        method: request.method,
        headers: {
          "x-api-key": "s",
        },
      },
      nextOptions: {
        cache: "no-store",
      },
    });
  },
};

export default BlockRepository;
