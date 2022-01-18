import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import * as firestore from "react-firebase-hooks/firestore";
import * as auth from "react-firebase-hooks/auth";
import Playlist from "./Playlist";

describe("Playlist", () => {
  const film = [
    {
      nameRu: "",
      year: "2007",
      posterUrlPreview: "",
      filmId: 123,
      genres: [{ genre: "приключения" }],
    },
  ];

  beforeEach(() => {
    const useAuthSpy = jest.spyOn(auth, "useAuthState");
    useAuthSpy.mockReturnValue([{ uid: "test" }, true, true]);
  });

  it("render component", async () => {
    const useCollectionSpy = jest.spyOn(firestore, "useCollectionData");
    useCollectionSpy.mockImplementation(() => [film, false, undefined]);

    render(<Playlist />);
    const element = screen.getByTestId("playlist");
    await waitFor(() => expect(element).toBeInTheDocument());
  });
  it("render Loader while making a request", async () => {
    const useCollectionSpy = jest.spyOn(firestore, "useCollectionData");
    useCollectionSpy.mockImplementation(() => [film, true, undefined]);

    render(<Playlist />);
    const element = screen.getByTestId("playlist-loader");
    await waitFor(() => expect(element).toBeInTheDocument());
  });
});
