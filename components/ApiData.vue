<script>
const apiUrl = 'https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data';

// Fetch data from the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const siteData = data.data.siteData.testTaskTemplate_30_15673;

        console.log(siteData.testTaskHeaderTitle);
        console.log(siteData.testTaskHeaderSubtitle);
        console.log(siteData.testTaskHeaderText);

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
</script>
