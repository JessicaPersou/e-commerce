package com.portalDoMalte.event.listener;

import javax.servlet.http.HttpServletResponse;
import java.net.URI;

import com.portalDoMalte.event.ResourceCreateEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



@Component
public class ResourceCreateListener implements ApplicationListener<ResourceCreateEvent> {

    @Override
    public void onApplicationEvent(ResourceCreateEvent resourceCreateEvent) {
        HttpServletResponse response = resourceCreateEvent.getResponse();
        Long id = resourceCreateEvent.getId();

        addHeaderLocation(response, id);
    }

    private void addHeaderLocation(HttpServletResponse response, Long codigo) {
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(codigo).toUri();
        response.setHeader("Location", uri.toASCIIString());
    }
}
