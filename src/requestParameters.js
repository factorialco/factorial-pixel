function findPropertyInParams(params = '', property) {
  const acc = {};

  params.split('&').forEach((param) => {
    const [key, value] = param.split('=');

    acc[key] = value;
  });

  return acc[property];
}

export default function requestParameters(document) {
  const path = document.location.origin + document.location.pathname;
  const search = document.location.search.substring(1);
  const landing = encodeURI(path);
  const locale = document.querySelector('html').lang.split('-')[0];
  const gclid = findPropertyInParams(search, 'gclid');
  const aclid = findPropertyInParams(search, 'aclid');
  const fbclid = findPropertyInParams(search, 'fbclid');

  return {
    language: locale,
    landingPage: landing,
    gclid,
    aclid,
    fbclid,
  };
}
