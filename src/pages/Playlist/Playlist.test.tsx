import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Playlist from "./Playlist";

// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import * as firestore from 'react-firebase-hooks/firestore';

describe("Playlist", () => {
  it("render component", async () => {
    // const useCollectionData = jest.fn();
    // useCollectionData.mockReturnValue([true, false]);

    // jest.mock('react-firebase-hooks/firestore', () => ({
    //     useCollectionData: jest.fn(),
    // }));
    // useCollectionData.mockReturnValue([true, false]);

    // jest.spyOn(firestore, 'useCollectionData').mockReturnValue([['film'], false, undefined]);

    render(<Playlist />);
    const element = screen.getByTestId("playlist");
    await waitFor(() => expect(element).toBeInTheDocument());
  });
});
