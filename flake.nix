{
  inputs.nixpkgs.url = "nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { nixpkgs, flake-utils, ... }:
    let
      forAllSystems = f: builtins.listToAttrs (map (system: { name = system; value = f system; }) flake-utils.lib.defaultSystems);
    in
    {
      devShells = forAllSystems (system: {
        default = import ./shell.nix {
          pkgs = import nixpkgs { inherit system; };
        };
      });

      formatter = forAllSystems (system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        pkgs.nixpkgs-fmt
      );
    };
}
