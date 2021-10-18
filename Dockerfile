FROM ubuntu
RUN apt-get update && apt-get install ca-certificates gnupg2 -y
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
RUN echo "deb https://dl.k6.io/deb stable main" | tee /etc/apt/sources.list.d/k6.list
RUN apt-get update
RUN apt-get install k6
# FROM loadimpact/k6:latest AS k6official
COPY projects /projects
COPY scripts /scripts
COPY pipelines /pipelines
COPY Utils /Utils
RUN chmod +x /scripts/perfAPICmdString.sh
ENTRYPOINT ["/scripts/perfAPICmdString.sh"]