# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [2.0.0 - 2026-03-28] - Thanks to @SBSBTest to points this improvements

### Added

- New SVG input mode dropdown with support for `SVG Public URL`, `SVG RAW TEXT`, and `From Template folder`
- Bundled template manifest used to expose the packaged SVG samples in the property panel

### Changed

- Updated the renderer to load SVG markup from the selected input mode before replacing placeholders with measure values
- Updated the README with the new SVG configuration flow

### Removed

- Removed temporary `console.log` debug messages from the extension paint flow

## [1.0.0] - 2023-07-09

### Added

- First version of the extension
